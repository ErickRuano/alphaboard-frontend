import {Button, GroupLayout, Avatar} from '@components'
import { useState } from 'react'
import Link from 'next/link';

const Create = ({group = {
    name: '',
    description: '',
    nfts: [],
    wallets: [],
}, action = 'create'}) => {
    const [step, setStep] = useState(0)
    const [variant, setVariant] = useState('default')
    const steps = [
        {
            title: action == 'create' ? 'Create your first group to get started' : `Update ${group.name}`,
            description: action == 'create' ?  'Create your group' : `Update your group`,
        },
        {
            title: 'Generate your NFT collection',
            description: 'Generate your NFT collection',
        },
        {
            title: 'Send to your partner’s wallets',
            description: 'Send to your partner’s wallets',
        },
        {
            title: '',
            description: '',
        },
    ]

    const handleChange = (e) => {
        console.log(e)
        e == 3 && setVariant('full')
        setStep(e)
    }

    return (
        <GroupLayout name={steps[step].title} description={steps[step].description} variant={variant} >
            {step === 0 && <div className="w-full max-w-screen-sm flex flex-col justify-start items-center m-auto">
                <input type="text" placeholder="Name" className="input w-full bg-base-200 h-16 mb-10" />

                <textarea type="text" placeholder="Description" className="input w-full bg-base-200 h-32 p-4 mb-10" />

                <Button className="btn-active btn-ghost w-32" onClick={ e => handleChange(1)} >
                    Continue
                </Button>
            </div>}
            {step === 1 && <div className="w-full flex flex-col justify-start m-auto">
                <div className="flex flex-row justify-start items-center m-auto gap-10 mb-10">
                    <Avatar {...{width:300, height:300}} className='p-10 bg-black' />
                </div>
                <div className='flex gap-10 justify-center'>
                    <Button className="btn-active btn-ghost w-32" onClick={ e => console.log('randomize')} >
                        Randomize
                    </Button>
                    <Button className="btn-active btn-ghost w-32" onClick={ e => handleChange(2)} >
                        Continue
                    </Button>
                </div>
            </div>}
            {step === 2 && <div className="w-full max-w-screen-sm flex flex-col justify-start items-center m-auto">
                <textarea type="text" placeholder="Wallets" className="input w-full bg-base-200 h-64 p-4 mb-10" />

                <Button className="btn-active btn-ghost w-32" onClick={ e => handleChange(3)} >
                    Send
                </Button>
            </div>}
            {step === 3 && <div className="h-full w-full flex justify-center flex-col max-w-screen-2xl m-auto">
                <div className='h-full flex items-center'>
                    <h1 className='w-full self-center text-center'>All set</h1>
                </div>

                <Button className="w-40 btn-active btn-ghost place-self-center" >
                    <Link href={`/groups/${new Date().getTime() }/dashboard`}>
                        <a>
                                Go to group
                        </a>
                    </Link>
                </Button>
            </div>}
        </GroupLayout>
    )
}

export default Create;