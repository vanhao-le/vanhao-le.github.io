repo_api_link = "https://api.github.com/repos/vanhao-le/vanhao-le.github.io/commits";

function ModifiedDateTime() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-datetime').textContent = dat.slice(0,10) + " " + dat.slice(11,19) ;
      });
  }


function ModifiedDate() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-date').textContent = dat.slice(0,10);
      });
  }



function ModifiedYear() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-year').textContent = dat.slice(0,4);
      });
  }
