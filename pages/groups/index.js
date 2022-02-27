import {GroupLayout, Avatar} from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
    const [groups, setGroups] = useState([])
    const router = useRouter()

    useEffect(() => {
        groups < 1 && router.push('/groups/create')
        return () => {
            // cleanup
        };
    }, [groups]);

    return (
        <GroupLayout name="My groups" description={`Mis grupos`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-20 pt-10'>
                {groups.map((group, i) => <div class="card bg-base-100">
                    <div className="flex justify-center items-center overflow-hidden h-80 p-5 bg-base-content rounded-xl" key={i}>
                        <Avatar {...{width:300, height:300}} />
                    </div>
                    <div class="card-body">
                        <h2 class="card-title mb-5">
                            Grupo {group}
                        </h2>
                        <p className='mb-5' >If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex flex-col">
                            <p>{group} members</p>
                            <p>{group} NFT's</p>
                        </div>
                        {/* <div class="justify-end card-actions">
                            <div class="badge badge-outline">Fashion</div> 
                            <div class="badge badge-outline">Products</div>
                        </div> */}
                    </div>
                </div>)}
                <div class="card bg-base-100 hover:cursor-pointer">
                    <div className="flex justify-center items-center overflow-hidden h-80 p-5 bg-base-300 rounded-xl">
                        <h1>+</h1>
                        {/* <Avatar {...{width:300, height:300}} /> */}
                    </div>
                    <div class="card-body">
                        <h2 class="card-title mb-5">
                            { groups.length > 0  ? `Crear un grupo nuevo` : `Crear tu primer grupo`}
                        </h2>
                    </div>
                </div>
            </div>
        </GroupLayout>
    )
}

export default Index;