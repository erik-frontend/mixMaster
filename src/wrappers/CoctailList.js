import styled from 'styled-components';
 
const Wrapper = styled.div`
  max-width: var(--max-width);
  width: var(--view-width);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;
 
export default Wrapper;