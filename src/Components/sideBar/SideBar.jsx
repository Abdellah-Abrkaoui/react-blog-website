import './sidebar.css'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarItemTitle'>ABOUT ME</span>
            <img src="/src/assets/pic.jpg" className="sidebarItemImg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem optio. Facere nostrum laudantium asperna.</p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarItemTitle'>CATEGORIES</span>
            <ul className="sidebarCategoriesList">
                <li className="sidebarCategoriesListItem">Life</li>
                <li className="sidebarCategoriesListItem">Sport</li>
                <li className="sidebarCategoriesListItem">Style</li>
                <li className="sidebarCategoriesListItem">Cinema</li>
                <li className="sidebarCategoriesListItem">Tradition</li>
                <li className="sidebarCategoriesListItem">Others</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarItemTitle'>FOLLOW US</span>
            <ul className="sidebarSocialList">
            <i className="sidebarSocialListItem fa-brands fa-facebook"></i>
      <i className="sidebarSocialListItem fa-brands fa-instagram"></i>
      <i className="sidebarSocialListItem fa-brands fa-twitter"></i>
      <i className="sidebarSocialListItem fa-brands fa-pinterest"></i>
            </ul>
        </div>
        
    </div>
  )
}

export default SideBar
