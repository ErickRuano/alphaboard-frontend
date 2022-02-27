import {GroupLayout, Avatar} from '@components'
import { useState } from 'react'
const Create = () => {
    const [groups, setGroups] = useState([])
    return (
        <GroupLayout name="Create yout first group to get started" description={`Empieza creando tu primer grupo`}></GroupLayout>
    )
}

export default Create;