import { useState, useEffect } from "react";
import axios from "axios";
import { DNA } from 'react-loader-spinner';
import { REACT_APP_API_URL } from './constants';
import { createGlobalStyle } from "styled-components";
import { getUsedFilters, getFilteredRealtyData } from './helpers';

import Card from './components/Card';
import Modal from "./components/Modal";
import Button from './components/Button';

import * as Styled from "./styled";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const App = () => {
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [realtyData, setRealtyData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const usedFilters = getUsedFilters(filters);
  const filteredItems = getFilteredRealtyData(usedFilters, realtyData);

  const fetchRealtyData = async () => {
    try {
      const { data: { data: { items } } } = await axios(REACT_APP_API_URL);

      setRealtyData(items);
      setLoading(false);
    } catch (error) {
      console.log('Fetch error:', error)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRealtyData()
  }, []);

  return (
    <Styled.Container>
      <Styled.FiltersButton>
        <Button
          text="Filters"
          backgroundColor='secondary'
          onClick={() => setIsModalOpen(true)}
        />
      </Styled.FiltersButton>

      <Styled.Cards>
        {filteredItems?.map((card) => (<Card key={card.id} cardData={card} />))}
      </Styled.Cards>

      <Modal isOpen={isModalOpen} handleDisplayModal={setIsModalOpen} setFilters={setFilters} />
      <GlobalStyle />
      <Styled.Loader>
        <DNA
          width="80"
          height="80"
          visible={loading}
          ariaLabel="dna-loading"
        />
      </Styled.Loader>

      <GlobalStyle />
    </Styled.Container>
  );
}

export default App;
