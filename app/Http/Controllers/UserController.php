<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\User;
use Hash;
use Uuid;
use App\Http\Requests\Users\RegisterUserRequest;
use App\Http\Traits\ResponseTrait;

class UserController extends Controller
{
    
    use ResponseTrait;

	/**
	** Register an user
	* @param user details
	* @return json
	**/
    public function register(RegisterUserRequest $request){
    	try{

            $user = new User;
            $user->uuid = (String) Uuid::generate(4);
            $user->first_name = $request->firstname;
            $user->last_name = $request->lastname;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();

    		return $this->returnResponse([
                'status' => true,
                'msg' => 'You have been successfully registered'
            ]);

    	}catch(Exception $e){
    		return $this->returnException($e);
    	}
    }

    /**
    ** User login
    * @param user
    * @return json
    **/
    public function login(Request $request){
        try{

        }catch(Exception $e){
            return $this->returnException($e);
        }
    }
}
