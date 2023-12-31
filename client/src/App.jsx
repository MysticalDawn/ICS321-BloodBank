import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./page/login.jsx";
import { Admin } from "./page/admin_page/admin.jsx";
import { Add_Remove_Edit } from "./page/admin_page/add_remove_edit.jsx";
import { Search_History } from "./page/admin_page/search_history.jsx";
import { Edit_System_User } from "./page/admin_page/edit_system_user.jsx";
import { Blood_Requests } from "./page/admin_page/blood_requests.jsx";
import { Begin_Blood_Drive } from "./page/admin_page/initiate_blood_drive.jsx";
import { Donor } from "./page/donor_page/donor.jsx";
import { Search_History_Donor } from "./page/donor_page/search_history_donor.jsx";
import { Donate } from "./page/donor_page/donate.jsx";
import { Recipient } from "./page/recipient/recipient.jsx";
import { Search_History_Recipient } from "./page/recipient/search_histroy_recipient.jsx";
import { Request_Blood } from "./page/recipient/request_blood.jsx";
import { Confirm_Request } from "./page/recipient/confim_request.jsx";
import { Edit_Info_Donor } from "./page/donor_page/edit_info.jsx";
import { Edit_Info_Recipient } from "./page/recipient/edit_info.jsx";
import { Allow_Edit_Info } from "./page/admin_page/allow_edit_info.jsx";
import { Guest } from "./page/guest/guest.jsx";
import { Send_Email } from "./page/admin_page/send_email.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add_remove_edit" element={<Add_Remove_Edit />} />
          <Route path="/admin/search_history" element={<Search_History />} />
          <Route
            path="/admin/edit_system_user"
            element={<Edit_System_User />}
          />
          <Route path="/admin/blood_requests" element={<Blood_Requests />} />
          <Route
            path="/admin/begin_blood_drive"
            element={<Begin_Blood_Drive />}
          ></Route>
          <Route path="/donor" element={<Donor />} />
          <Route
            path="/donor/search_history"
            element={<Search_History_Donor />}
          />
          <Route path="/donor/donate" element={<Donate />} />
          <Route path="/recipient" element={<Recipient />} />
          <Route
            path="/recipient/search_history"
            element={<Search_History_Recipient />}
          />
          <Route path="/recipient/request_blood" element={<Request_Blood />} />
          <Route
            path="/recipient/confirm_request"
            element={<Confirm_Request />}
          />
          <Route path="/donor/edit_info" element={<Edit_Info_Donor />} />
          <Route
            path="/recipient/edit_info_recipient"
            element={<Edit_Info_Recipient />}
          />
          <Route path="/admin/edit_info" element={<Allow_Edit_Info />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/admin/send_email" element={<Send_Email />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
