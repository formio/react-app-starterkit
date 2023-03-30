import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import logo from '../Light-Background.png';
import { useRef, useEffect, useState } from 'react';

function Navigation() {

    return (
          <div class="navigationMenu">
             
            <div class="clientInfo">
              <h2>Kelly Baker</h2>
              <p>Digital assessment</p>
            </div>
            <ul>
              <li>
                <span class="status"></span>
                <a href="#">Assessment information</a>
                <span class="progression">0/9</span>
              </li>
              <li>
              <span class="status done"></span>
                <a href="#">Background information</a>
                <span class="progression">0/47</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Care Goals</a>
                <span class="progression">0/6</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Daily Routine</a>
                <span class="progression">0/6</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Health</a>
                <span class="progression">0/16</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Suportive Tasks</a>
                <span class="progression">0/18</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Safety / Care Risks</a>
                <span class="progression">0/2</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Caregiver Requirements</a>
                <span class="progression">0/7</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Schedule</a>
                <span class="progression">0/7</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Post-Intake / Assessment Care Management Notes</a>
                <span class="progression">0/1</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">OSHA Hazard Assessment</a>
                <span class="progression">0/5</span>
              </li>
              <li>
              <span class="status"></span>
                <a href="#">Billing Rates</a>
                <span class="progression">0/3</span>
              </li>
            </ul>
          </div>
      
  
  );
}

export default Navigation;