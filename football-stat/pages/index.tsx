import Head from 'next/head'
import Image from 'next/image'
import classes from '@/styles/Home.module.scss'



export default function Home() {
    return (
        <>
            <div className={classes["main-page"]}>
                <div className="main-page-contain">
                    <h1 className="main-heading">Choose your <span>Player</span></h1>
                    <p className="main-description">Unlimited Possibilities</p>
                </div>
            </div>
        </>
    )
}
