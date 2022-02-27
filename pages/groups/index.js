import {GroupLayout, Avatar} from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Index = () => {
    const [groups, setGroups] = useState([1])
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
                {groups.map((group, i) => <div className="card bg-base-100">
                <Link href={`/groups/${new Date().getTime() }/dashboard`}>
                        <a>
                            <div className="flex justify-center items-center overflow-hidden h-80 p-5 bg-base-content rounded-xl" key={i}>
                                <Avatar {...{width:300, height:300}} />
                            </div>
                        </a>
                </Link>
                    <div className="card-body">
                        <h2 className="card-title mb-5">
                            Grupo {group}
                        </h2>
                        <p className='mb-5' >If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex flex-col">
                            <p>{group} members</p>
                            <p>{group} NFT's</p>
                        </div>
                        {/* <div className="justify-end card-actions">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div> */}
                    </div>
                </div>)}
                <div className="card bg-base-100 hover:cursor-pointer">
                    <Link href={`/groups/create`}>
                        <a>
                            <div className="flex justify-center items-center overflow-hidden h-80 p-5 bg-base-300 rounded-xl">
                                <h1>+</h1>
                                {/* <Avatar {...{width:300, height:300}} /> */}
                            </div>
                        </a>
                    </Link>
                    <div className="card-body">
                        <h2 className="card-title mb-5">
                            { groups.length > 0  ? `Crear un grupo nuevo` : `Crear tu primer grupo`}
                        </h2>
                    </div>
                </div>
            </div>
        </GroupLayout>
    )
}

export default Index;