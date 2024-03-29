import styled from 'styled-components'
import breakpoints from './breakpoints';

export const Container = styled.div`
          height: 100vh;
          background-color: #FFF;
         
          
          @media ${breakpoints.md} {
               height: 100%;
               width: 100%;  
               overflow-x: hidden;
     }
        
          h2{
            text-align: center;
            margin-top: 20px;
            font-weight: 600;
            font-size: 25px;
            color:   #033495;
            cursor: pointer;

            @media ${breakpoints.sm} {
           
                margin-left: 20px;
                font-size: 20px;
                width: 300px;
          }

          @media ${breakpoints.md} {
                  text-align: center;
                  margin-left: 15px;
                  font-size: 23px; 
                  color: #000;   
     }
        
          }

          p{
            width: 500px;
            text-align: center;
            font-weight: 300;
            margin-left: 500px;
            margin-top: 20px;
            color: #54504c;
            cursor: pointer;

            @media ${breakpoints.sm} {
                 width: 100px;
                 font-size: 15px;
                 margin-left: -20px;
                 margin-top: 10px;
     }
     @media ${breakpoints.md} {
                margin-left: 50px;
                font-size: 18px;
                width: 300px;
      }
      }`; 

export const Header= styled.header`
         display: flex;
         justify-content: space-around;
         align-items: center;
         height: 70px;
        
         @media ${breakpoints.md} {
           
               width: 100%;
          }

          @media ${breakpoints.md} {
               display: flex;
               margin-left: 50px;
          }
      
        ul{
            list-style: none;
            display: flex;
            margin-left: 20px;

            @media ${breakpoints.sm} {
                 margin-left: -30px;
                 display: flex;
                 justify-content: center;      
          }   
           
        li{
             margin: 10px 50px 10px 50px; 
             display: flex;  
             font-size: 15px;
             font-weight: 400;
             color: #000;
             cursor: pointer;

             @media ${breakpoints.sm} {
            margin: 20px 20px 10px 20px;
            font-size: 10px;
           
          }

          @media ${breakpoints.md} {
          
          margin: 20px 20px 10px 20px;
          font-size: 15px;
          
          }
         &:active{
         transform: scale(0.95); 
          opacity: 0.5;
       }
       } }`;     

export const ContainerItens = styled.div`
          width: 100%;
          height: 50%;
          display: flex;
          margin-top: 20px;
          justify-content: space-around;
          background-color: #F6F4EB;

          @media ${breakpoints.sm} {
           flex-direction: column;
           align-items: center;
           justify-content: center;
           width: 120%;
          }
         
          @media ${breakpoints.md} {
                 width: 100%;
                 height: 344px;
                 background: #033495;
          }
          
          button{
            
            width: 150px;
            height: 30px;
            margin-left: 50px;
            margin-top: 30px;
            background: #033495;
            border: none;
            font-size: 15px;
            font-weight: 300;
            color: #fff;
            cursor: pointer;
            border-radius: 20px;

            @media ${breakpoints.sm} {
              margin-right: 50px;
              
          }
         
               
              

          @media ${breakpoints.md} {
                 margin-top: 30px;
                 margin-left: 90px;
                 background: #C5D4EB;
                 color: #000;
                 font-weight: 600;
          }
        
        
        &:hover{
        background: #004E98;
    }
          
          &:active{
          transform: scale(0.95); 
          opacity: 0.2;
       }
    
}`;

export const H1 = styled.h1`
       font-size: 30px;
       font-weight: 400;
       color: #121212;
       height: 50px;
       width: 350px;
       margin-top: 70px;

       @media ${breakpoints.sm} {
              font-size: 15px;
              width: 300px;
              height: 300px;
                
      }
        
          @media ${breakpoints.md}{
                 font-size: 30px;
                 color: #fff;
                 margin-top: 120px;
                 margin-left: 20px;   
          }         
`;

export const Logo = styled.image`
    img{
       display: flex;
        margin-left: -120px;
        position: relative;
    }

  
   @media ${breakpoints.md} {
             display: flex;   
             position: absolute;
             margin-top: -40px;
             margin-left: 30px;
          }
`;

export const Button = styled.button`
       display: flex;
       margin-right: 10px;
       margin-left: 20px;
       margin-top: 10px;
       cursor: pointer;
       border: none;
       background: #033495;
       padding: 12px 20px;
       border-radius: 6px;
       transition: 0.2s;
       font-size: 15px;
       color: #fff;

       &:hover{
        box-shadow: 0 0 0 4px #fff,
        0 0 0 6px #033495;
       }

       &:active{
          transform: scale(0.95); 
          opacity: 0.5;
       }
       @media ${breakpoints.sm} {
           display: none;
          }

          @media ${breakpoints.md} {
                  display: none; 
          }
`;

export const Image = styled.img`
         
    border-radius: 30% 30% 70% 70%;

    @media ${breakpoints.sm} {
           display: none;
          }

          @media ${breakpoints.md} {
           display: none;
           }                       
`;

export const CardContainer = styled.div`
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 2px; 
  margin-top: 80px;
  margin-left: 120px;
  justify-content: center; 

  @media ${breakpoints.sm} {
           
    margin-left: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    margin-top: 20px;        
}

@media ${breakpoints.md} {
            
   margin-left: 0px;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 30px;
   margin-top: 50px;
   margin-left: 100px;
  }
`;

export const Card = styled.div`
       
       background-color: #F9F9F9;
       border-radius: 25px;
       width: 300px;
       height: 310px;

       &::before{
        content: "";
        position: absolute;
        height: 150px;
        width: 312px;
        background: #033495;
        border-radius: 20px 20px 0 0;
      } 

       @media ${breakpoints.sm} {
       
        width: 100%;
        height: auto;
        margin-left: 0px;
        background:  #FFF;

        &::before{
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background: #033495;
        border-radius: 10px 10px 0 0;
       
  }
     
       }   
       
       @media ${breakpoints.md} {
           
        width: 70%;
        height: auto;
        margin-left: -50px;
        margin-right: auto;
     
          }    

       @media ${breakpoints.md} {
        &::before{
        content: "";
        position: absolute;
        width: 150px;
        height: 100px;
        background: #033495;
        border-radius: 20px 20px 0 0;
       
  }  
          @media ${breakpoints.md} {
            top: 0;
            left: 0;
            width: 100%;      
          } 
       }

        img{
            display: flex;
            margin-left: 90px;
            margin-top: 20px;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #FFF;
            padding: 2px;
            border: 3px solid #033495;
            position: relative;
            z-index: 100;

            @media ${breakpoints.sm} {
             margin: 20px auto 0; 

          }     
          
          @media ${breakpoints.md} {
            margin: 30px auto 0;  
            height: 70px;
            width: 70px;
       }
          } 

        h3{
            text-align: center;
            margin-top: 20px;
            font-weight: 500; 
            font-size: 18px;   

          @media ${breakpoints.sm} {
            
          font-size: 14px;
          }  
          
          @media ${breakpoints.md} {
           font-size: 15px;

          }     
        
        }

    
        p {
        text-align: center;
        margin-left: 10px;
        margin-right: 25px;
        font-size: 14px;
        width: 300px;

        @media ${breakpoints.sm} {
            margin-left: 10px;
            width: 200px;
            font-size: 12px;

          }     

          
        @media ${breakpoints.md} {
            margin-left: 8px;
            width: 130px;
            font-size: 12px;

          }          
    }

    button{
    
    padding: 8px 16px;
    margin-left: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #033495;
    border: none;
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;

    @media ${breakpoints.sm} {
    
    margin-top: 20px;
    display: block;
    padding: 5px 5px;
    border: none;
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    background: #004E98;
    }

    
    @media ${breakpoints.md} {
      margin: 10px auto;
      display: block;
      padding: 3px 4px;
      border: none;
      border-radius: 6px;
      font-weight: 400;
      font-size: 13px;
      color: #fff;
      cursor: pointer;
      background: #004E98;

          }     

    &:active{
          transform: scale(0.95); 
          opacity: 0.5;
       }
  }
           
`;

export const Registerdiv = styled.div`
          display: flex;
          flex-direction: column;
          position: absolute;
          z-index: 100;
          background: #FFF;
          padding: 50px;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          margin-top: 400px;
          margin-left: 650px;
         

      h1{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        width: 300px;
        margin-left: -50px;
      }
      
      input{
      display: flex;
      flex-direction: column;
      margin-left: -20px;
      width: 120%;
      margin-bottom: 2px;
      margin-top: 20px;
      padding: 6px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 13px;
     } 

     button{
        width: 150px;
        height: 35px;
        border-radius: 20px;
        border: none;
        margin-top: 30px;
        margin-left: 25px;
        display: flex;
        align-items:center;
        justify-content: center;
        background:  #3785D8;
        color: #FFF;
        font-weight: 600;
        font-size: 14px; 
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
        
    &:active{
          transform: scale(0.95); 
          opacity: 0.5;
       }
     }
          
`;





