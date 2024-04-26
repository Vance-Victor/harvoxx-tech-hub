import React from 'react';
// import '../App.css';
import Sidebar from './Sidebar';
import { TbBooks, TbBriefcase, TbUser, TbCode} from "react-icons/tb";
import { FaLayerGroup } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import Header2 from './Header2';

const DashboardHomepage = () => {

  const Cards = [
    {
      text: 'Departments',
      icon: TbBooks,
      link: '/departments'
      // background:'#6861ce'
    },
    {
      text: 'Projects',
      icon: TbBriefcase,
      link: '/projects'
      // background:'#6861ce'
    },
    {
      text: 'Roles',
      icon: FaLayerGroup,
      link: '/roles'
      // background:'#6861ce'
    },
    {
      text: 'Staffs',
      icon: TbUser,
      link: '/staffs'
      // background:'#6861ce'
    },
    {
      text: 'Skills',
      icon: TbCode,
      link: '/skills'
      // background:'#6861ce'
    },


  ];


  return (
    <div className='dashb'>


      <section className='dashboard'>

        <Sidebar />

        <main>
          <Header2 />

          <section className='left'>

            {/* <div className='search'>
                <img src={s} alt="" />
                <input type="search" placeholder='Search' />
              </div> */}

            <div className='cards-container'>

              {Cards && Cards.map(({ icon, text, background, link }, index) => {
                return (

                  <Link to={link} className="cardss">
                    <div className='card1'>
                      <div className='icon-card' style={{ backgroundColor: background }}>

                        <i className='icons'>{React.createElement(icon)}</i>

                      </div>

                      <div className='card-text'>
                        <p>{text}</p>
                      </div>
                    </div>

                  </Link>


                )
              })}



            </div>
          </section>

        </main>

      </section>
    </div>
  )
}

export default DashboardHomepage