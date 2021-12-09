import styled from "styled-components"

const Wrapper = styled.div`
padding-top: 50px;
padding-right: 120px;
padding-left: 120px;

@media (min-width: 1500px) {
    padding-top: 100px;
    padding-right: 250px;
    padding-left: 250px;
}
`

const Container = ({children, className}) => {
    return (
        <Wrapper>
            <div class={className}>
                {children}
            </div>
        </Wrapper>
    )
};

export default Container;