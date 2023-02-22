import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Food } from '@/types';
import styles from '@/styles/Menu.module.css'
import MainsGridList from './MainsGridList';
import SidesGridList from './SidesGridList';
import TartsGridList from './TartsGridList';
import SpecialsGridList from './SpecialsGridList';
import MenuFooter from './MenuFooter';

interface IProps {
    data: Food[];
}

const MenuBody: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.menubody}>
        <header className={styles.header}>
          <div className={styles.name}><span>T</span><span>O</span><span>A</span><span>S</span><span>T</span><span>Y</span></div>
          <div className={styles.openinghours}>Open Monday-Saturday: 09:00 - 23:00</div>
          <div className={styles.location}>
            <p>Street</p>
            <p>phone</p>
          </div>
          <div className={styles.specialannouncements} />
        </header>
        <main>
            <div className={styles.legend}>
                <div className={styles.legend__item}><i>N</i><span>Nuts</span></div>
                <div className={styles.legend__item}><i>E</i><span>Eggs</span></div>
                <div className={styles.legend__item}><i>W</i><span>Wheat</span></div>
                <div className={styles.legend__item}><i>D</i><span>Dairy</span></div>
                <div className={styles.legend__item}><i>S</i><span>Seafood</span></div>
            </div>
            <div className={styles.menu}>
                <MainsGridList data={data}/>
                <SidesGridList data={data}/>
                <TartsGridList data={data}/>
                <SpecialsGridList data={data}/>

                <a className={styles.menudownload}>Download the menu</a>
            </div>

        </main>
        <MenuFooter/>
    </div>
  )
}

export default MenuBody