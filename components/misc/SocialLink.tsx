import Link from "next/link"
import Image from 'next/image';

export const SocialLink = ({url, path, description}: {url:string, path:string, description:string}) => {

    return (
        <>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 transition ease-in-out delay-25 shadow shadow-md shadow-blue-400 hover:drop-shadow-[0_0_0.3rem_#07cce3] duration-500 w-10">
                <Link href={url} target="_blank">
                    <Image
                        priority
                        src={path}
                        alt={description}
                    />
                </Link>
            </div>
        </>
    )
}