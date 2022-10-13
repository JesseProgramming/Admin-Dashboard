import React from 'react';

export default function products(){
    return (
        <div className="products">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Available</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chocolate Chip</td>
                        <td>529</td>
                        <td>$3.99</td>
                        <td>
                            <button>Del</button>
                            <button>Upd</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Snicker Doodle</td>
                        <td>725</td>
                        <td>$4.99</td>
                        <td>
                            <button>Del</button>
                            <button>Upd</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sugar Cookie</td>
                        <td>356</td>
                        <td>$2.49</td>
                        <td>
                            <button>Del</button>
                            <button>Upd</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Double Choc</td>
                        <td>234</td>
                        <td>$5.99</td>
                        <td>
                            <button>Del</button>
                            <button>Upd</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Peanut Butter</td>
                        <td>73</td>
                        <td>$3.49</td>
                        <td>
                            <button>Del</button>
                            <button>Upd</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}