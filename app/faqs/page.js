import Accordion from '@/components/FAQ/Accordion/Accordion'
import FaqHero from '@/components/FAQ/FaqHero/FaqHero'
import React, { Fragment } from 'react'

const page = () => {
  return (
    <Fragment>
      <FaqHero />
      <Accordion />
    </Fragment>
  )
}

export default page