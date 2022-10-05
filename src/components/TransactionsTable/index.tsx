
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td className="deposit">Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td>- R$ 1.100</td>
            <td className="withdraw">Desenvolvimento</td>
            <td>17/02/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  )
}