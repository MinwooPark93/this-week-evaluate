import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [rate, setRate] = useState(0);
  return (
    <Container>
      <Title>{params.week}요일 평점 남기기</Title>
      <Evaluate>
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setRate(idx + 1);
              }}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: rate < idx + 1 ? "#eee" : "#81c784",
              }}
            ></div>
          );
        })}
      </Evaluate>
      <Btn
        onClick={() => {
          navigate(-1);
        }}
      >
        평점 남기기
      </Btn>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  border: 1px solid red;
  width: 350px;
  height: 40vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: wheat;
  border: 1px solid #999;
  transition: ease-in-out 0.3s;
  will-change: contents;

  &:hover {
    box-shadow: 3px 10px 10px 5px #222;
    transform: scale(1.02);
  }
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const Evaluate = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.div`
  width: 140px;
  height: 40px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #eee;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
