import React from 'react'

export default function Navbar() {
    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light px-4 2xs:px-5 l:px-10 2xl:px-5">
            <a class="navbar-brand" href="/home">HotelEasy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto px-4 2xs:px-5 l:px-10 2xl:px-5">
                    <li class="nav-item active"> 
                        <a class="nav-link" href="/favorites">Favorites</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Log in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/menu">Menu</a>
                    </li>
                </ul>
            </div>
            <div class="border-b border-grey-300"></div>
        </nav></div>
    )
}