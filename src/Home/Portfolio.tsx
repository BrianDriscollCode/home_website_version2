import React from "react";

const Portfolio = () => {

    return (

        <div id="portfolio_section">

            <div id="portfolio_wrapper">

                <h2> Portfolio </h2>
                <h3> Some applications I have built </h3> 

                <div className="portfolio_entry">

                    <div className="portfolio_text">
                        <h4> Boxing Ecommerce Website </h4>
                        <p>  Uses reusable components. Pages are updated via the state without the need for editing single pages. Also login, create an account, manage cart, and more! </p>
                        <div className="portfolio_tech"> Technologies: React, Redux, SASS, JavaScript </div>
                        <div className="portfolio_buttons">
                            <button> Github </button>
                            <button> Website </button>
                        </div>
                    </div>

                    <div className="portfolio_image">
                        <img src="images/title_boxing_portfolio_project.png" width="500" />
                    </div>

                </div>

                <div className="portfolio_entry_reverse">

                    <div className="portfolio_text">
                        <h4> Insurance Policy Manager </h4>
                        <p>  Manage insurance policies using redux as a state manager. Allows for adding, deleting, history tracking, and submitting insurance claims while also tracking the total budget.</p>
                        <div className="portfolio_tech"> Technologies: JavaScript, React (Hooks), Redux, SASS </div>
                        <div className="portfolio_buttons">
                            <button> Github </button>
                            <button> Website </button>
                        </div>
                    </div>

                    <div className="portfolio_image">
                        <img src="images/insurance_policy_manager_project.png" width="500" />
                    </div>

                </div>

                <div className="portfolio_entry">

                    <div className="portfolio_text">
                        <h4> Safaria World </h4>
                        <p>  The main website for an NFT project. I served as the webmaster and creative lead for this project by managing design, layout, updates, making assets, photoshop work, and more. </p>
                        <div className="portfolio_tech"> Technologies: JavaScript, React (class-based) , CSS, API, AXIOS </div>
                        <div className="portfolio_buttons">
                            <button> Github </button>
                            <button> Website </button>
                        </div>
                    </div>

                    <div className="portfolio_image">
                        <img src="images/safaria_world_portfolio_project.png" width="500" />
                    </div>

                </div>

                <div className="portfolio_entry_reverse">

                    <div className="portfolio_text">
                        <h4> Event Finder  </h4>
                        <p>  Find your favorite concert or dancing event near you! This application uses the TicketMaster API to search for events and show details about the events users are interested in.</p>
                        <div className="portfolio_tech"> Technologies: HTML, CSS, Bootstrap, Basic File Hosting </div>
                        <div className="portfolio_buttons">
                            <button> Github </button>
                            <button> Website </button>
                        </div>
                    </div>

                    <div className="portfolio_image">
                        <img src="images/event_finder_portfolio_project.png" width="500" />
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Portfolio;