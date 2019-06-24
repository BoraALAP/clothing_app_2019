import React from "react";

import styled from "styled-components";

const Display = () => {

  const PageContainer = styled.div`
    display: grid;
  `

  const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items:center;
  `

  const TopBox = styled(Box)`
  
  `

  const ChestBox = styled(Box)`
  
  `

  const LegBox = styled(Box)`
  
  `
  return (
    <section>
      <PageContainer>
        <TopBox>
          <h1>Top</h1>
        </TopBox>

        <ChestBox>
        <h1>chest</h1>
        <h1>chest</h1>
        <h1>chest</h1>

        </ChestBox>

        <LegBox>
        <h1>leg</h1>
        </LegBox>
      </PageContainer>
    </section>
  );
};

export default Display;
