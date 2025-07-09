import styled from "styled-components";

const Wrapper = styled.nav`
    background: var(--white);
    .nav-center {
        width: var(--view-width);
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
    }

    .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
}
`

export default Wrapper