import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Switch from "react-switch";
import { api } from '../../services/api';

import { Container, Content, SwitchBox, Footer } from './styles';

interface CarProps {
  id: string,
  name: string,
  brand: string,
  year: number,
  sold: boolean,
  description: string,
  created_at: Date,
}

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  reloadData: () => void;
  data?: CarProps;
}

export function NewCarModal({ isOpen, onRequestClose, reloadData, data }: NewTransactionModalProps) {

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState(0);
  const [sold, setSold] = useState(false);
  const [description, setDescription] = useState('');

  async function handleCarData(event: FormEvent) {
    event.preventDefault();

    const dataCar = {
      name,
      brand,
      year,
      sold,
      description
    }

    if(data?.id){
      await api.put(`/cars/${data.id}`, dataCar);
    } else {
      await api.post('/cars', dataCar);
    }

    setBrand('');
    setDescription('');
    setName('');
    setSold(false);
    setYear(0);

    reloadData();
    onRequestClose();
  }

  useEffect(() => {
    if(data?.id){
      setName(data.name);
      setBrand(data.brand);
      setYear(data.year);
      setSold(data.sold);
      setDescription(data.description);
    } else {
      setBrand('');
      setDescription('');
      setName('');
      setSold(false);
      setYear(0);
    }
  }, [data]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-button-close"
      >
      </button>

      <Container>
        <h2>Novo Veículo</h2>

        <Content>
          <div>
            <label htmlFor="name" hidden={false}>Veículo</label>
            <input
              type="text"
              id="name"
              name="nome"
              placeholder={"Veículo"}
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              id="brand"
              name="marca"
              placeholder={"Marca"}
              value={brand}
              onChange={event => setBrand(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="year">Ano</label>
            <input
              type="number"
              id="year"
              name="ano"
              placeholder={"Ano"}
              value={year}
              onChange={event => setYear(Number(event.target.value))}
            />
          </div>
          
          <SwitchBox>
            <Switch
              onChange={setSold}
              checked={sold}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              id="material-switch"
            />
            <span>Vendido</span>
          </SwitchBox>
          
        </Content>
        
        <label htmlFor="description">Descrição</label>
        <textarea
          cols={59}
          rows={8}
          id="description"
          placeholder="Adicionar descrição..."
          onChange={event => setDescription(event.target.value)}
          value={description}
        />
        
        <Footer>
          <button
            type="submit"
            onClick={handleCarData}
          >
            ADD
          </button>
          <button
            type="button"
            onClick={onRequestClose}
          >
            FECHAR
          </button>
        </Footer>
        
      </Container>
    </Modal>
  )
}