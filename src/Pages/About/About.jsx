import React from 'react'
import BreadCrumbs from '../../Components/BreadCrumb'
import { useTranslation } from 'react-i18next';
import AboutCards from '../../Components/AboutCard/AboutCards';

export default function About() {
const { t } = useTranslation();
return (
    <main className='container-fluid'>
        <section className='my-4'>
            <BreadCrumbs />
        </section>
        <section className="flex flex-col my-10 gap-y-4">
            <h1 className="text-2xl font-bold text-third-900">{t("about_us")}</h1>
            <p className="font-normal text-third-700">{t("about_paragraph")}</p>
        </section>
        <section className='my-4'>
            <div>
                <AboutCards />
            </div>
        </section>
        <section>
            <div className="flex flex-col justify-between gap-4 md:flex-row container-fluid bg-secondary-100 md:py-14">
                <div className='px-4 border-2 border-third-550'>
                    <h4 className='px-3 text-2xl font-bold -translate-x-3 -translate-y-1/2 x-5 bg-secondary-100 w-fit'>رؤيتنا</h4>
                    <p >نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
                </div>
                <div className='px-4 border-2 border-third-550'>
                    <h4 className='px-3 text-2xl font-bold -translate-x-3 -translate-y-1/2 x-5 bg-secondary-100 w-fit'>رؤيتنا</h4>
                    <p >نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
                </div>
            </div>
        </section>
    </main>
)
}
