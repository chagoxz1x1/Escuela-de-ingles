import { Component, OnInit } from "@angular/core";
import { ICreateOrderRequest } from "ngx-paypal";


interface Producto {
  titulo: string;
  imagen: string;
  precio: string;
  archivo: string;
  contenido: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  styles: [`
  .product-container {
    position: absolute;
    font-size:20px;
    top: 110%; 
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20%;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 110%; /* Ajustar el ancho */
    height:230%; /* Ajustar la altura */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrar verticalmente */
    align-items: center; /* Centrar horizontalmente */

    background-color: #0EDAFF;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg fill-opacity='0.85'%3E%3Crect fill='%230EDAFF' width='11' height='11'/%3E%3Crect fill='%2322dbff' x='10' width='11' height='11'/%3E%3Crect fill='%232fdbff' y='10' width='11' height='11'/%3E%3Crect fill='%2339dcff' x='20' width='11' height='11'/%3E%3Crect fill='%2341ddff' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%2348ddff' y='20' width='11' height='11'/%3E%3Crect fill='%234fdeff' x='30' width='11' height='11'/%3E%3Crect fill='%2355dfff' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%235bdfff' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2360e0ff' y='30' width='11' height='11'/%3E%3Crect fill='%2365e1ff' x='40' width='11' height='11'/%3E%3Crect fill='%236ae1ff' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%236fe2ff' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2373e2ff' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2377e3ff' y='40' width='11' height='11'/%3E%3Crect fill='%237be4ff' x='50' width='11' height='11'/%3E%3Crect fill='%237fe4ff' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2383e5ff' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2387e6ff' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%238be6ff' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%238fe7ff' y='50' width='11' height='11'/%3E%3Crect fill='%2392e8ff' x='60' width='11' height='11'/%3E%3Crect fill='%2396e8ff' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%2399e9ff' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%239ce9ff' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23a0eaff' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23a3ebff' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23a6ebff' x='70' width='11' height='11'/%3E%3Crect fill='%23a9ecff' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23adedff' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23b0edff' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23b3eeff' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23b6efff' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23b9efff' x='80' width='11' height='11'/%3E%3Crect fill='%23bcf0ff' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23bff0ff' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23c2f1ff' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23c4f2ff' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23c7f2ff' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23caf3ff' x='90' width='11' height='11'/%3E%3Crect fill='%23cdf3ff' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d0f4ff' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d2f5ff' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d5f5ff' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d8f6ff' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23dbf7ff' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ddf7ff' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23e0f8ff' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23e3f8ff' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23e5f9ff' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23e8faff' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ebfaff' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23edfbff' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23f0fbff' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23f2fcff' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23f5fdff' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23f7fdff' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23fafeff' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23fcfeff' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23FFFFFF' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  }
    .product-container img.product-img {
      width: 100%;
      max-width: 320px;
      height: auto;
      margin-top:20%
      
    }
  `]
})
export class ProductosComponent implements OnInit{
  public payPalConfig: any;
  public showPaypalButtons: boolean = false;
 constructor(){
  this.showPaypalButtons = false;
 }
 
  ngOnInit(): void {
    this.payPalConfig = {
      currency: "EUR",
      clientId: "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
      createOrder: (data:any) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "9.99",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data:any, actions:any) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details:any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data:any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
      },
      onCancel: (data:any, actions:any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err:any) => {
        console.log("OnError", err);
      },
      onClick: (data:any, actions:any) => {
        console.log("onClick", data, actions);
      }
    };
  }
 
  pay() {
    this.showPaypalButtons = true;
  }
 
  back(){
    this.showPaypalButtons = false;
  }
  



  productos: Producto[] = [
    {
      titulo: "Manual Redes V1",
      imagen: "../../../assets/img/Productos/Manual 1.jpg",
      precio: "$15.000",
      contenido: "Manual de redes para principiantes, conviértete en un experto.",
      archivo: "./../../../assets/pdf/conoce.pdf"
    },
    {
      titulo: "Manual Redes V2",
      imagen: "../../../assets/img/Productos/Manual 2.jpg",
      precio: "$25.000",
      contenido: "Descripción del producto para el manual V2",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
      
    },
    {
      titulo: "Manual Redes V3",
      imagen: "../../../assets/img/Productos/Manual 3.png",
      precio: "$35.000",
      contenido: "Descripción del producto para el manual V3",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
    },
    {
      titulo: "Curso Angular principiante",
      imagen: "../../../assets/img/Productos/an.png",
      precio: "$18.000",
      contenido: "Descripción del producto para el curso Angular principiante",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
    },
    {
      titulo: "Curso front-end Básico",
      imagen: "../../../assets/img/Productos/front.png",
      precio: "$32.000",
      contenido: "Descripción del producto para el curso front-end básico",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
    },
    {
      titulo: "Curso Experiencia de Usuario",
      imagen: "../../../assets/img/Productos/experiencia.png",
      precio: "$54.000",
      contenido: "Descripción del producto para el curso Experiencia de Usuario",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
    },
    {
      titulo: "Curso React js Principiante",
      imagen: "../../../assets/img/Productos/js.png",
      precio: "$18.000",
      contenido: "Descripción del producto para el curso React js Principiante",
      archivo: "../../../assets/pdf/manual_redes_v1.pdf"
    },
    {
      titulo: "Calcas de nuestra empresa",
      imagen: "../../../assets/img/logoN.png",
      precio: "$32.000",
      contenido: "Descripción del producto para las calcas de nuestra empresa",
      archivo: "../../../assets/pdf/manual_redes_v111.pdf"
    }
  ];

  contenidoVisible: number | null = null;

  mostrarContenido(index: number): void {
    // Si se ha clicado otro botón, se muestra solo el contenido del botón clicado
    if (this.contenidoVisible !== index) {
      this.contenidoVisible = index;
    } else {
      // Si se ha clicado el mismo botón, se oculta todo el contenido
      this.contenidoVisible = null;
    }
  }
}
