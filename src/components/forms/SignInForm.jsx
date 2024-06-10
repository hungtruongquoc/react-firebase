import React, { useState } from 'react'

const SignupForm = ({ onSubmit, loading, error, submitButtonText }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        onSubmit(formData.email, formData.password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{submitButtonText}</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default SignupForm
