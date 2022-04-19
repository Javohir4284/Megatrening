import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalStyle = styled(Modal)`
  .modal-dialog {
    max-width: 40%;
    @media (max-width: 1300px) {
      max-width: 50%;
    }
    @media (max-width: 992px) {
      max-width: 60%;
    }
    @media (max-width: 767px) {
      max-width: 80%;
    }
    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
  .form {
    /* .modalHead {
      height: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    } */
    /* .modal {
      background-color: #fff;
      color: #000;
      padding: 16px;
      border-radius: 10px;
      width: 600px;
      margin: auto;
    } */
    h1 {
      padding: 0 0 0 60px;
      margin-top: 40px;
      @media (max-width: 576px) {
        padding: 0 0 0 20px;
      }
    }

    .cancel {
      position: relative;
      img {
        position: absolute;
        right: -10px;
        top: -50px;
      }
    }
    form {
      padding: 0 60px 40px;
      input,
      select {
        width: 100%;
        border: 2px solid #00b4bf;
        border-radius: 7px;
        height: 40px;
        outline: none;
        font-size: 20px;
        color: #111;
        padding: 0 12px;
      }
      @media (max-width: 576px) {
        padding: 0 20px 10px;
      }

      select {
        appearance: none;
        cursor: pointer;
      }

      button {
        background: #00b4bf;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 14px;
        /* font-family: sfProRegular; */
        color: #fff;
        width: 100%;
        margin-top: 24px;
        font-size: 20px;
      }

      label {
        color: #242424;
        font-size: 16px;
        display: block;
        margin-top: 16px;
        margin-bottom: 8px;
      }

      .type {
        position: relative;

        img {
          position: absolute;
          right: 12px;
          bottom: 14px;
          pointer-events: none;
        }
      }
    }
  }
`;

export const ModalStylePayment = styled(Modal)`
  .modal-dialog {
    max-width: 70%;
    /* max-height: 60%; */
    @media (max-width: 992px) {
      max-width: 100%;
    }
    @media (max-width: 576px) {
      .modal-body {
        padding: 0 !important;
      }
    }
  }
  .payment {
    .wrapper {
      padding: 50px;
      color: #000;
      width: 80%;
      text-align: center;
      margin: auto;
      @media (max-width: 750px) {
        padding: 0;
        /* width: 90% !important; */
      }
      @media (max-width: 576px) {
        h1 {
          font-size: 20px !important;
        }
      }
      > button {
        background: #00b4bf;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 14px;
        color: #fff;
        margin: 16px auto;
        font-size: 22px;
      }
    }

    .display {
      background-color: #c4c4c4;
      width: 80%;
      height: 150px;
      margin: 20px auto;
      margin-bottom: 50px;
    }

    .bussiness {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;

      h1 {
        font-size: 24px;
      }

      .example {
        display: grid;
        grid-template-columns: 1fr 1fr;
        vertical-align: middle;

        .counter {
          border: 2px solid #00b4bf;
          border-radius: 5px;
          width: 120px;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (max-width: 576px) {
            width: 90px;
          }

          button {
            font-size: 24px;
            width: 20px;
            background: none;
            border: none;
            color: #a4a4a4;
            cursor: pointer;
            width: 25%;
          }

          span {
            display: block;
            width: 50%;
            font-size: 24px;
          }
        }

        .result {
          margin-top: 8px;
          font-size: 20px;
          /* line-height: 130%; */
          color: #242424;
          margin-left: 24px;
          @media (max-width: 440px) {
            margin-left: 8px;
          }
        }
      }
    }

    hr {
      margin: 16px 0;
    }

    .final {
      display: flex;
      justify-content: space-between;

      h1,
      .res {
        font-size: 24px;
      }
    }
  }
`;
