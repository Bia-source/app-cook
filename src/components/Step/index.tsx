import * as style from "./style";

type Props = {
    step: number;
    description: string;
}
export function Step({ step, description }: Props){
    return (
        <style.Container>
            <style.Step>{step}</style.Step>
            <style.Description>{description}</style.Description>
        </style.Container>
    )
}