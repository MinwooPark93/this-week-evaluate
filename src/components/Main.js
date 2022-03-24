import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  let week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date().getDay();
  let pass = week.splice(0, today);
  week = week.concat(pass);
  console.log(week);

  return (
    <Container>
      <Title>This Week Evaluate</Title>
      <div>
        {week.map((cur) => {
          const randomNum = Math.floor(Math.random() * 5);
          // 랜덤값 콘솔 찍어봤다.
          console.log(randomNum);
          return (
            <OneWeek key={cur}>
              <span>{cur}</span>
              <ScoreBox>
                {Array.from({ length: 5 }, (x, i) => {
                  return (
                    <Score key={i}>
                      <Circle
                        style={{
                          backgroundColor: i <= randomNum ? "#81c784" : "#eee",
                        }}
                      />
                    </Score>
                  );
                })}
              </ScoreBox>
              <Btn
                onClick={() => {
                  navigate(`/detail/${cur}`);
                }}
              >
                Go
              </Btn>
            </OneWeek>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 350px;
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: wheat;
  transition: ease-in-out 0.3s;
  will-change: contents;
  border: 1px solid #999;

  &:hover {
    box-shadow: 3px 10px 10px 5px #222;
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  margin: 40px 0;
`;

const OneWeek = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 60%;
`;

const Score = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #999;
`;

const Btn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20%;
  color: #fff;
  font-weight: bold;
  background-color: #333;
  cursor: pointer;
`;

export default Main;
