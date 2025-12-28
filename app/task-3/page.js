"use client"
import { useState } from "react"

export default function Page() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [qualification, setQualification] = useState("");
    const [address, setAddress] = useState("");
    const [userDetails, setUserDetails] = useState([]);
    function emptyCheck(s) {
        if (s == null || s == undefined) {
            return false;
        }
        if (typeof s !== "string") {
            return false;
        }
        if (s.trim().length === 0) {
            return false;
        }
        return true;
    }
    function handleSave(e) {
        if (
            !emptyCheck(name) ||
            !emptyCheck(gender) ||
            !emptyCheck(qualification) ||
            !emptyCheck(address)
            // !isvalidIndianPhoneNumber(phoneNumber)
        ) {
            return;
        }
        e.preventDefault();
        let id = Date.now();
        setUserDetails(prevUsers => [...prevUsers, { id, name, age, gender, qualification, address, phoneNumber }])
    }
    function normalizePhone(input) {
        if (typeof input !== "string") return "";
        return input.replace(/[\s\-()]/g, "");
    }
    function isvalidIndianPhoneNumber(s) {
        if (!s || typeof s !== "string") return false;
        let normalized = normalizePhone(s);
        if (normalized.startsWith("91")) {
            normalized.slice(3);
        }
        if (!/^[6-9]\d{9}$/.test(normalized)) return false;
        return true;
    }
    function handleDelete(id) {
        setUserDetails((users) => users.filter((user) => (
            user.id != id
        )
        ))
    }
    return (
        <div
            className=" ">
            <form
                className="bg-gray-300"
            >
                <label>Name</label>
                <br />
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white"
                    placeholder="Enter your Name" />
                <br />
                <label>Age</label>
                <br />
                <input
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-white"
                    type="date"
                    placeholder="Enter your Age" />
                <br />
                <label>Gender</label>
                <br />
                <select
                    onChange={(e) => setGender(e.target.value)}
                    className="bg-white"
                >
                    <option>Select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>shemale</option>
                </select>
                <br />
                <label>Mobile Number</label>
                <br />
                <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white"
                    type="text"
                    placeholder="Enter your Phone Number" />
                <br />
                <label>Qualification</label>
                <br />
                <input
                    onChange={(e) => setQualification(e.target.value)}
                    className="bg-white"
                    placeholder="Enter your Qualification" />
                <br />
                <label>Address</label>
                <br />
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-white"
                    placeholder="Enter your Address" />
                <button
                    onClick={handleSave}
                    className="ml-2 text-center px-2 bg-green-500 py-0.5 rounded-xl text-white cursor-pointer ">Save</button>
            </form>
            <div className="h-screen ">
                <table className="bg-amber-100 w-full ">
                    <tr className="">
                        <th className="">name</th>
                        <th className="px-2">gender</th>
                        <th className="px-2">phoneNumber</th>
                        <th className="px-2">qualification</th>
                        <th>address</th>
                        <th className="px-2">age</th>
                    </tr>

                    {userDetails.map((user) =>
                        <tr className="px-2">
                            <td className="px-2">{user.name}</td>
                            <td className="">{user.gender}</td>
                            <td className="">{user.phoneNumber}</td>
                            <td>{user.qualification}</td>
                            <td>{user.address}</td>
                            <td className="truncate overflow-hidden table-fixed px-2">{user.age}</td>
                            <button
                                onClick={() => { handleDelete(user.id) }}
                                className="bg-red-800 text-white text-center px-2 rounded-xl mt-0.5 cursor-pointer">Delete</button>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}