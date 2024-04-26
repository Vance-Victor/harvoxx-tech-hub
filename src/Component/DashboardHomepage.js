import React from 'react';
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
    },
    {
      text: 'Projects',
      icon: TbBriefcase,
      link: '/projects'
    },
    {
      text: 'Roles',
      icon: FaLayerGroup,
      link: '/roles'
    },
    {
      text: 'Staffs',
      icon: TbUser,
      link: '/staffs'
    },
    {
      text: 'Skills',
      icon: TbCode,
      link: '/skills'
    },


  ];


  return (
    <div className='dashb'>


      <section className='dashboard'>

        <Sidebar />

        <main>
          <Header2 />

          <section className='left'>

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