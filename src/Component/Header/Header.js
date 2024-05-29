import React, { useState } from 'react';
import { Category } from './Header.config';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const toggleSubMenu = (menuId) => {
    setOpenSubMenu(openSubMenu === menuId ? "" : menuId);
  };

  return (
    <div style={{ backgroundColor: '#4287f5' }}>
      <div className="container-fluid">
        <div className='d-flex justify-content-center align-items-center py-2'>
          {Category.map((data) => (
            <div
              className="dropdown"
              key={data.id}
              onMouseEnter={() => toggleSubMenu(data.id)}
              onMouseLeave={() => setOpenSubMenu("")}
            >
              <Link
                to={data.route}
                className="text-white text-decoration-none mx-1 d-flex align-items-center"
                style={{ padding: '0.5rem 1rem' }}
              >
                <span>{data.name}</span>
                {data.data.length > 0 && (
                  openSubMenu === data.id ? <ChevronDown className="ml-1" /> : <ChevronRight className="ml-1" />
                )}
              </Link>
              {data.data.length > 0 && (
                <ul
                  className={`dropdown-menu ${openSubMenu === data.id ? "show" : ""}`}
                  style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}
                >
                  {data.data.map((item) => (
                    <li key={item.id}>
                   
                      <Link to={item.route} className="dropdown-item d-flex align-items-center">
                        <i className={item.Icon} style={{ marginRight: '8px' }}></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
