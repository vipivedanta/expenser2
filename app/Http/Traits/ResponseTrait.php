<?php 
		
	namespace App\Http\Traits;

	trait ResponseTrait{

		public function returnResponse($array, $status = 200){
			return response()->json($array,$status);
		}

		public function returnError($array,$status = 401){
			return response()->json($array,$status);
		}

		public function returnException($e,$status = 401){
			$array = [
				'status' => false,
				'msg' => $e->getMessage()
			];

			return $this->returnError($array);
		}
	}

?>