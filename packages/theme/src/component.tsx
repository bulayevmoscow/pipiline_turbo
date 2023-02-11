import styled from "@emotion/styled";

export const SomeComponent = styled.div`
    background: ${({theme}) => 'red' && theme.backgroundColor};
`
