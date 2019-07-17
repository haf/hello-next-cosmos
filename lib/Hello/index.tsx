import { FC } from 'react'

type Props = { name: string }
const Hello: FC<Props> = props => <p>Hello world, {props.name}!</p>
export default Hello