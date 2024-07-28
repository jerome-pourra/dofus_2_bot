import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountInformationInPaddockRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7545;

	public mapRideId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountInformationInPaddockRequestMessage(input);
    }

    private deserializeAs_MountInformationInPaddockRequestMessage(input: ICustomDataInput)
    {
        this._mapRideIdFunc(input);
    }

    private _mapRideIdFunc(input: ICustomDataInput)
    {
        this.mapRideId = input.readVarInt();
    }

}