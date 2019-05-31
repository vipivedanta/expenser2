<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\User;
use Hash;
use Uuid;
use App\Http\Requests\Users\RegisterUserRequest;
use App\Http\Traits\ResponseTrait;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class UserController extends Controller
{
    
    use ResponseTrait;
    use AuthenticatesUsers;
	
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
    ** Login the user
    * @param user details
    * @return json
    **/
    public function login(Request $request){
            try{
                $credentials = $request->only(['email','password']);
                $user = Auth::attempt($credentials);
              
                if(!$user)
                    throw new Exception('Invalid login credentials');

                return response()->json([
                        'status' => true,
                        'msg' => 'Successfully logged in',
                        'user' => [ 
                                'uuid' => Auth::user()->uuid,
                                'firstname' => Auth::user()->first_name,
                                'lastname' => Auth::user()->last_name
                        ]
                ]);

            }catch(Exception $e){
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage()
                ]);
            }
    }
}
