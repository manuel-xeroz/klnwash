import Accordion from '@/components/Accordion/Accordion'
import FaqHero from '@/components/FaqHero/FaqHero'
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