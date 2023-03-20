import styledComponents from 'styled-components';

export const Description = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Name = styledComponents.p`
    font-weight: bold;
    font-size: 25;
`;

export const Tag = styledComponents.p`
    color: grey;
`;

export const Location = styledComponents.p`
    color: grey;
`

export const Stats = styledComponents.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

export const ListElement = styledComponents.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`
// display: flex;
// justify-content: center;
