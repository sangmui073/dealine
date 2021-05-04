import style from "styled-components";

const T_CONTAINER = style.div`
    background-color : ${(props) => props.theme.bgColor};
    color : ${(props) => props.theme.color};
    border : 2px solid ${(props) => props.theme.borderColor};
`;
const T_BUTTON = style.button`
    background-color : none;
    color : ${(props) => props.theme.color};
    border: 1px solid ${(props) => props.theme.borderColor};
    &:hover {
        color : ${(props) => props.theme.hoverTextColor};
        background-color : ${(props) => props.theme.hoverBgColor};
    }
`;
const T_DIV = style.div`
    border : 1px solid ${(props) => props.theme.borderColor};
`;
const T_INPUT = style.input`
    border : 1px solid ${(props) => props.theme.borderColor};
    outline : "none"

`;
const T_SELECT = style.select`
    color : ${(props) => props.theme.color};
    background-color : ${(props) => props.theme.bgColor};
    border-color : ${(props) => props.theme.borderColor};
    outline : "none"
`;
export { T_CONTAINER, T_BUTTON, T_DIV, T_INPUT, T_SELECT };
