import React, { useState } from 'react';
import { FaBell, FaCheckCircle, FaChartBar, FaUser, FaCalendar } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const barChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ]
            }
        ]
    };

    const pieChartData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ]
    };

    const StatCard = ({ icon, title, value, change }) => (
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="text-blue-500 text-3xl">{icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change >= 0 ? '+' : ''}{change}%
                </p>
            </div>
        </div>
    );

    const NotificationCard = ({ title, message, time }) => (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
            <div className="text-yellow-500 text-xl mt-1"><FaBell /></div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{message}</p>
                <p className="text-xs text-gray-400 mt-1">{time}</p>
            </div>
        </div>
    );

    const TaskCard = ({ task, completed, dueDate }) => (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => { }}
                    className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={`${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task}</span>
            </div>
            <span className="text-sm text-gray-500">{dueDate}</span>
        </div>
    );

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard icon={<FaUser />} title="Total Users" value="1,234" change={5.7} />
                    <StatCard icon={<FaChartBar />} title="Revenue" value="$56,789" change={-2.3} />
                    <StatCard icon={<FaCheckCircle />} title="Tasks Completed" value="89%" change={3.1} />
                    <StatCard icon={<FaCalendar />} title="Upcoming Events" value="12" change={0} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h2>
                        <Line data={lineChartData} options={{ responsive: true }} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Distribution</h2>
                        <Pie data={pieChartData} options={{ responsive: true }} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                            <Bar data={barChartData} options={{ responsive: true }} />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
                            <div className="space-y-4">
                                <NotificationCard
                                    title="New User Registration"
                                    message="John Doe has registered a new account."
                                    time="2 hours ago"
                                />
                                <NotificationCard
                                    title="Task Completed"
                                    message="Project X has been marked as completed."
                                    time="5 hours ago"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
                            <div className="space-y-3">
                                <TaskCard task="Review new design" completed={false} dueDate="Today" />
                                <TaskCard task="Team meeting" completed={true} dueDate="Yesterday" />
                                <TaskCard task="Launch marketing campaign" completed={false} dueDate="Next week" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;