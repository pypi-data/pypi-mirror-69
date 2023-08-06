use pyo3::prelude::*;
use pyo3::exceptions;
use std::time::Duration;

extern crate serde_json; // 1.0.22

#[pyclass]
struct Client {
    client: reqwest::blocking::Client
}

#[pymethods]
impl Client {
    #[new]
    fn new(timeout: u64) -> PyResult<Self> {
        let client = reqwest::blocking::Client::builder()
            .timeout(Duration::from_millis(timeout))
            .build();
        match client {
            Ok(r) =>  Ok(Client{client :r}),
            Err(e) => return Err(exceptions::ValueError::py_err(e.to_string()))
        }
        //reqwest::blocking::Client::new()}
    }

    pub fn post(self_: PyRef<Self>, a: String, data: String) ->PyResult<String>  {
        let client = &self_.client;
        let resp = client.post(&a).body(data).header("Content-Type","application/json").send();

        let resp = match resp {
            Ok(r) => r,
            Err(err) => return Err(exceptions::ValueError::py_err("request err:".to_owned() + &err.to_string()))
        };

        //reqwest::blocking::get(&url)?
        let resp = resp.text();
        match resp {
             Ok(r) => Ok(r),
             Err(err) => return Err(exceptions::ValueError::py_err("json err:".to_owned()+&err.to_string()))
         }

        
        //  match  serde_json::to_string(&resp) {
        //      Ok(r) => Ok(r),
        //      Err(err) => Err(exceptions::ValueError::py_err("serde err:".to_owned() + &err.to_string())),
        //  }
    }

    }




/// This module is a python module implemented in Rust.
#[pymodule]
fn pr_request(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<Client>()?;
    Ok(())
}
