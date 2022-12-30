import { FC, useEffect, useState } from "react";
import styles from "./RootPage.module.less";

export const RootPage: FC = () => {

  const [items, setItems] = useState([])
  
  useEffect (() => {
      function getData () {
          fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => res.json())
            .then((json) => (setItems(json.Valute))) 
        }   
      getData ()
  }, [])

  interface Array {
    ID: string;
    NumCode: string;
    CharCode: string;
    Name: string;     
    Value: number;    
  }

  const arr: Array [] = Object.values(items)  

  const rows = arr.map(function(item) {
    return <tr key={item.ID}>
      <td>{item.NumCode}</td>
      <td>{item.CharCode}</td>
      <td>{item.Name}</td>
      <td>{item.Value}</td>
    </tr>;
  });
      
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <td><h4>Цифровой код валюты</h4></td>
            <td><h4>Символьный код валюты</h4></td>
            <td><h4>Наименование валюты</h4></td>
            <td><h4>Курс</h4></td>
          </tr>
        </thead>
          <tbody>
              {rows}
          </tbody>
      </table>
  </div>
  )
}

