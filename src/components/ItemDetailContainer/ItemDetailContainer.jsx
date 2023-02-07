import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const cards = [
    {
      id: 1,
      categoria: "notebooks",
      foto: "https://http2.mlstatic.com/D_NQ_NP_654550-MLA50382039569_062022-O.webp",
      nombre:
        "Computadora Portatil Notebook Hp B-3520 15,6 ",
      descripcion:
        "Procesador Intel Celeron, Memoria RAM de 4GB, Pantalla LED de 15.6, Resolución de 1366x768 px, Placa de video Intel UHD Graphics 600.",
        precio: 400,
    },
    {
      id: 2,
      categoria: "notebooks",
      foto: "https://http2.mlstatic.com/D_NQ_NP_925341-MLA48914320135_012022-O.webp",
      nombre: "Notebook HP 14-cf2533la plata natural 14",
      descripcion:
        "2-channel, 50-watt high-gain electric guitar amplifier Revoiced channels go from chimey to grinding 12AX7 preamp tubes and EL34 power tubes",
      precio: 450,
    },
    {
      id: 3,
      categoria: "notebooks",
      foto: "https://http2.mlstatic.com/D_NQ_NP_953866-MLA50968332322_082022-O.webp",
      nombre: "MacBook Air A1466 plata 13.3",
      descripcion:
        "Intel Core i5 5350U  8GB de RAM 128GB SSD, Intel HD Graphics 6000 1440x900px macOS,, Intel Core i5 5350U  8GB de RAM 128GB SSD, Intel HD Graphics 6000 1440x900px macOS, , Intel Core i5 5350U  8GB de RAM 128GB SSD. ",
      precio: 800,
    },
    {
      id: 4,
      categoria: "allInOne",
      foto: "https://http2.mlstatic.com/D_NQ_NP_984963-MLA50046439350_052022-O.webp",
      nombre:
        "Computadora all in one Banghó Lite E27",
      descripcion:
        "Pantalla LED Full HD de 27, Sistema operativo Windows 11 Home, Tiene una memoria RAM DDR4, Tiene micrófono incorporado, Se conecta por Bluetooth a otros dispositivos y al Wi-Fi.",
      precio: 1399,
    },
    {
      id: 5,
      categoria: "allInOne",
      foto: "https://http2.mlstatic.com/D_NQ_NP_704623-MLA49951555317_052022-O.webp",
      nombre: "Computadora all in one HP 24-dd0017la",
      descripcion:
        "Pantalla WLED Full HD de 23.8, Sistema operativo Windows 10 Home, Tiene una memoria RAM DDR4, Tiene micrófono incorporado, Se conecta por Bluetooth a otros dispositivos y al Wi-Fi, Con 4 puertos USB USB-A 2.0, USB-A 3.0.",
      precio: 3599,
    },
    {
      id: 6,
      categoria: "allInOne",
      foto: "https://http2.mlstatic.com/D_NQ_NP_998212-MLA48574180357_122021-O.webp",
      nombre: "All In One Lenovo 3 Idea Centre",
      descripcion:
        "Sistema operativo Windows 10 Home, Se conecta por Bluetooth a otros dispositivos y al Wi-Fi, Tener una pc todo en uno es sinónimo de practicidad y comodidad.",
      precio: 4310,
    },
    {
      id: 7,
      categoria: "computadoraGamer",
      foto: "https://http2.mlstatic.com/D_NQ_NP_796821-MLA53382857953_012023-F.webp",
      nombre:
        "Pc Armada Nsx Gaming",
      descripcion:
        "PROCESADOR INTEL CORE I5 10400F LGA1200, MOTHER ASUS PRIME B460M-A R2.0 11VA/10MA, MEMORIA RAM PATRIOT 8GB DDR4-3200 V RGB X2, DISCO SSD PATRIOT P310 480GB M.2 PCI-E, VGA NVIDIA MSI GTX 1650 D6 VENTUS XS OC",
      precio: 1849,
    },
    {
      id: 8,
      categoria: "computadoraGamer",
      foto: "https://http2.mlstatic.com/D_NQ_NP_954186-MLA51779079776_092022-O.webp",
      nombre: "Pc Armada XSD Gaming",
      descripcion:
        "PROCESADOR: AMD RYZEN 5 4600G, MOTHER: A320M-R WIFI OEM, MEMORIA RAM: 8 GB DDR4, ALMACENAMIENTO: 240GB SSD, PLACA DE VIDEO: Radeon Graphics (INTEGRADO).",
      precio: 689,
    },
    {
      id: 9,
      categoria: "computadoraGamer",
      foto: "https://http2.mlstatic.com/D_NQ_NP_832317-MLA52853868338_122022-O.webp",
      nombre: "Pc Armada FOCUS Gamer",
      descripcion:
        "BX8070110400 PROCESADOR INTEL CORE I5 10400 LGA1200, 90MB18A0-M0E MOTHER ASUS PRIME B460M-A R2.0 11VA/10MA, PVSR8G320C8 MEMORIA RAM PATRIOT 8GB DDR4-3200 RGB X2, DISCO SSD PATRIOT P310 480GB M.2 PCI-E.",
      precio: 549,
    },
  ];

  const {id} = useParams()

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {cards[id-1].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={cards[id-1].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{cards[id-1].nombre}</h4>
        <p className="card-text">{cards[id-1].descripcion}</p>
        <h5 className="card-text">$ {cards[id-1].precio} USD</h5>
        <button id={cards[id-1].id} className="btn btn-primary">Comprar</button>
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer