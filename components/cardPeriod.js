import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import axios from 'axios';

const CollapsibleCard = ({ route }) => {
  const [apiData, setApiData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      accessToken.then(token => settoken(token));
     try {
         const responseDash = await axios.get('http://192.168.151.244:8000/api/v1/dashboard', {
           headers: {
           'Accept': 'application/json',
             'Authorization': 'Bearer ' + accessToken
           }
         });
       setApiData(responseDash.data);
       } catch (error) {
         console.error('Error al obtener datos de la API', error);
         setError('Error al obtener datos de la API');
       } finally {
         setLoading(false);
       }
    };

    fetchData();
  }, [null]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ margin: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10 }}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Total de Clientes: {apiData?.data?.total_clientes || 'No disponible'}
        </Text>
      </TouchableOpacity>

      <Collapsible collapsed={!isExpanded}>
        <View style={{ marginTop: 10 }}>
          <Text>Total de Contratos: {apiData?.data?.total_contratos || 'No disponible'}</Text>
          <Text>Total Vendido: {apiData?.data?.total_vendido || 'No disponible'}</Text>

          <Text>Períodos:</Text>
          {apiData?.data?.periodos.map((periodo) => (
            <Text key={periodo.id}>{periodo.periodo}</Text>
          ))}

          <Text>Mes:</Text>
          <Text>Contratos: {apiData?.data?.mes?.contratos || 'No disponible'}</Text>
          <Text>Ventas: {apiData?.data?.mes?.ventas || 'No disponible'}</Text>
          <Text>Comisión: {apiData?.data?.mes?.comision?.total || 'No disponible'}</Text>

          <Text>Visitas:</Text>
          <Text>Pendientes Pasadas: {apiData?.data?.visitas?.pendientes_pasadas || 'No disponible'}</Text>
          <Text>Pendientes: {apiData?.data?.visitas?.pendientes || 'No disponible'}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default CollapsibleCard;
