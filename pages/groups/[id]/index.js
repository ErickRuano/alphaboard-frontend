import {GroupLayout} from '@components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Create from './_create'

const Index = () => {
    const router = useRouter()
    const [group, setGroup] = useState({
        name: 'test',
        description: 'test',
        nfts: [],
        wallets: [],
    })
    const [groups, setGroups] = useState([])
    return (<>
        {
         router.query.id  === 'create' ? <Create /> : <Create group={group} action={'update'} />
        }
    </>
    )
}

export default Index;