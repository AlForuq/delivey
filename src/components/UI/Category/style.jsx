import styled from "styled-components";

export const CategoryContainer = styled.div`
 
  .category__item {
    background: #fde4e4;
    padding: 30px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
  }

  .category__item:hover {
    transform: translateY(-15px);
  }

  /* @media only screen and (max-width: 768px) {
    .category__item {
      padding: 20px 15px;
    }
    .category__img img {
      width: 40px;
      height: 40px;
    }

    .category__item h6 {
      font-size: 0.8rem;
    }
}  */
`;