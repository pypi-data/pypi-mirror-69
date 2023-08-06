#!/bin/bash
# -*- coding: utf-8 -*-

# ======= FUNC HERE ======= #
function start_wda() {

    # input
    xcode_build=$1
    wda_fp=$2
    udid=$3
    start=1
    end=30

    # implement
    wda_process=$(ps -ef | grep WebDriverAgentRunner | grep -v "grep" | wc -l)
    if [[ ${wda_process} -eq 0 ]];then
      echo "WebDriverAgentRunner is not exist, restarting ..."
      # clean project
      ${xcode_build} clean -project "$wda_fp"/WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner || exit 1
      # build
      nohup ${xcode_build} -project "$wda_fp"/WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination id="$udid" test >./build.log 2>&1 &
      # check xcodebuild state and exit when build failed
      # wait 30s
      while true;do
        if [[ ${start} -le ${end} ]] && [[ $(cat ./build.log | grep ServerURLHere | wc -l) -ne 0 ]];then
          echo -e "\n** BUILD SUCCEEDED **\n" ; break
        elif [[ ${start} -le ${end} ]] && [[ $(cat ./build.log | grep ServerURLHere | wc -l) -eq 0 ]] && [[ $(cat ./build.log | grep "TEST FAILED" | wc -l) -eq 0 ]];then
          echo "BUILDING ..., $(($end-$start))s left." ; sleep 1
        else
          echo -e "\n** BUILD FAILED **, Please check ./build.log for details\n" ; exit 1
        fi
        start=$(($start+1))
      done
    else
      echo "WebDriverAgentRunner is running ..."
    fi
}

function start_iproxy() {
    # check iproxy process
    iproxy_process=$(ps -ef | grep iproxy | grep -v "grep" | wc -l)
    if [[ ${iproxy_process} -eq 0 ]];then
        echo "iproxy is not exist, restarting ..."
        nohup iproxy 8100 8100 &
    else
        echo "iproxy is running ..." ;
    fi
}


# ======= PROCESS HERE ======= #
## start wda service
start_wda $1 $2 $3
## start iproxy
start_iproxy



