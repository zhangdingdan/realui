const rosConfig = {
  rosNode: 'robot',
  goToStation: ['/goal','std_msgs/UInt8'],
  pauseResumeRobot: ['/ui_robot_pra', 'std_msgs/UInt8'],
  batteryLevel: ['/robot_battery_percent', 'std_msgs/Float64'],
  mission: ['/mrccc_status_ui', 'std_msgs/UInt8']
};

const names = [
  {
    id: 5,
    name: 'Charge',
    color: blue
  },
]

const timer = 600000;

module.exports = {rosConfig};
