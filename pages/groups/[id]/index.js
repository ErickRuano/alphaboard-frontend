import {GroupLayout, Avatar} from '@components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Create from './_create'

const Index = () => {
    const router = useRouter()

    console.log(router)
    const [groups, setGroups] = useState([])
    return (<>
        {
         router.query.id  === 'create' ? <GroupLayout name="Create your first group to get started" description={`Empieza creando tu primer grupo`}>
             <Create />
         </GroupLayout>
         : <GroupLayout name="My groups" description={`Mis grupos`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-20 pt-10'>
                    <h1>
                        hi mom
                    </h1>
                </div>
            </GroupLayout>
        }
    </>
    )
}

export default Index;