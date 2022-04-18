import { FC, FormEvent, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import LoadingSpinner from "./LoadingSpinner";

import sloganPic from '../../assets/slogan-gen.png';

const API_URL = 'http://5c91-85-117-98-181.ngrok.io';

const getSlogans = async (word: string) => {
    return await axios.get(API_URL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        params: {
            query: word,
        }
    })
}

const SloganGenerator: FC = () => {
    const [slogans, setSlogans] = useState([])
    const [word, setWord] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        if (buttonDisabled) return;

        setIsLoading(true);
        getSlogans(word).then((res: any) => {
            setSlogans(res.data);
        }).finally(() => setIsLoading(false));

    }

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        setWord(value);

        if (value.length > 3) setButtonDisabled(false);
        else setButtonDisabled(true);
    }

    return <GeneratorContainer>
        <Row>
            <Column>
                <img src={sloganPic} style={{marginRight: 40}} />
            </Column>
            <Column>
                <HeaderText>Generate catchy slogan for your Brand for free</HeaderText>
            </Column>
        </Row>
        <Row>
            <Column>
                <Text>Slogan generator</Text>
                <TextLight>Simply enter a term that describes your business or service, and generate catchy slogans.</TextLight>
            </Column>
        </Row>
        <Row>
            <Column>
                <HintText>Enter a word. Generate slogan. Magic!</HintText>
                <Input placeholder="Enter a word" onChange={handleInputChange} value={word} />
            </Column>
        </Row>
        <Row>
            <GenerateButton onClick={handleClick}>Generate slogans</GenerateButton>
        </Row>
        <Row>
            <Line />
        </Row>
        <Row>
            <Center>
                {isLoading && <LoadingSpinner />}
            </Center>
            <Results>
                {!isLoading && slogans.map((slogan: any) => <Slogan>{slogan}</Slogan>)}
            </Results>
        </Row>
    </GeneratorContainer>
}

const GeneratorContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

    display: flex;
    flex-direction: column;
    width: 1000px;
    min-height: 912px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(84, 84, 84, 0.1);
    border-radius: 20px;
    padding: 50px;
`

const HeaderText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    /* or 119% */
    color: #2B333F;
    left: calc(50% - 611px/2 + 151px);
    margin: 0px 40px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height, or 114% */

    letter-spacing: -0.03em;

    color: #2B333F;
    margin: 10px 0px;
`

const TextLight = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */


    color: #8E96A5;
    margin: 10px 0px;
`

const HintText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 2px 0;
    /* identical to box height, or 133% */


    /* [day]/Element/Secondary */

    color: #868C98;
`

const Input = styled.input`
    width: 338px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 0.75px solid #E5E5EB;
    /* or 143% */

    display: flex;
    align-items: center;

    /* Text / Grey Lighten */

    color: #A7AAAD;

`

const GenerateButton = styled.button`
    width: 201px;
    height: 56px;
    background: #2979FF;
    border-radius: 10px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 50px 0px;

    color: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
`

const Line = styled.hr`
    width: 100%;
    height: 0.75px;
    color: #E5E5EB;
`

const Results = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`

const Slogan = styled.div`
    display: flex;
    align-items: center;
    width: 435px;
    height: 56px;
    background: #F9F9F9;
    border-radius: 10px;
    padding: 12px 32px;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 200px;
`

export default SloganGenerator;