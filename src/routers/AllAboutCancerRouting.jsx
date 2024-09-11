import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllAbouCancerHome from '../components/home/AllAbouCancerHome'


import Home from '../pages/Home'
import WidestAssortment from '../pages/WidestAssortment'
import BookTestsForCancer from '../pages/BookTestsForCancer'
import ResourcesForCancerPatients from '../pages/ResourcesForCancerPatients'
import Error404 from '../components/home/Error404'

import BreastCancer from '../pages/typeofcancers/BreastCancer'
import ThyroidCancer from '../pages/typeofcancers/ThyroidCancer'
import LiverCancer from '../pages/typeofcancers/LiverCancer'
import KidneyCancer from '../pages/typeofcancers/KidneyCancer'
import ColonCancer from '../pages/typeofcancers/ColonCancer'
import LungCancer from '../pages/typeofcancers/LungCancer'
import CervicalCancer from '../pages/typeofcancers/CervicalCancer'
import Leukemia from '../pages/typeofcancers/Leukemia'
import SoftTisueCancer from '../pages/typeofcancers/SoftTisueCancer'

import Membership from '../pages/footerpages/Membership'
import LocationAdd from '../pages/footerpages/LocationAdd'
import AboutNetmeds from '../pages/footerpages/AboutNetmeds'
import PrivacyPolicy from '../pages/footerpages/PrivacyPolicy'
import TermsAndConditions from '../pages/footerpages/TermsAndConditions'
import ContactUs from '../pages/footerpages/ContactUs'



export default function AllAboutCancerRouting() {
    return (
        <BrowserRouter>
            <Routes>

                {/* intial main page */}
                <Route path='/' element={<AllAbouCancerHome />} />
                <Route path='/*' element={<Error404 />} />
                {/* <Route path='/login' element={}/> */}

                {/* header routing */}
                <Route path='/home' element={<Home />} />
                <Route path='/healthcorner' element={<WidestAssortment />} />
                <Route path='/booktestsforcancer' element={<BookTestsForCancer />} />
                <Route path='/resourcesforcancerpatients' element={<ResourcesForCancerPatients />} />



                {/* Educationvedio1*/}
                <Route path='/educationvedio1' element={<AboutNetmeds />} />
                <Route path='/educationvedio2' element={<AboutNetmeds />} />
                <Route path='/educationvedio3' element={<AboutNetmeds />} />

                {/* types of cancer */}
                <Route path='/breast-cancer' element={<BreastCancer />} />
                <Route path='/thyroid-cancer' element={<ThyroidCancer />} />
                <Route path='/liver-cancer' element={<LiverCancer />} />
                <Route path='/kidney-cancer' element={<KidneyCancer />} />
                <Route path='/colon-cancer' element={<ColonCancer />} />
                <Route path='/lung-cancer' element={<LungCancer />} />
                <Route path='/cervical-cancer' element={<CervicalCancer />} />
                <Route path='/leukemia-cancer' element={<Leukemia />} />
                <Route path='/soft-tissue-cancer' element={<SoftTisueCancer />} />

                {/* Footer */}
                <Route path='/membership' element={<Membership />} />
                <Route path='/store-near-by' element={<LocationAdd />} />
                {/* footer */}
                <Route path='/aboutnetmeds' element={<AboutNetmeds />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/termsandconditions' element={<TermsAndConditions />} />
                <Route path='/contactus' element={<ContactUs />} />


            </Routes>
        </BrowserRouter>
    )
}
